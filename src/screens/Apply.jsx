import React, { useState, useEffect } from "react";
import { Container, Flex, FlexCol, ScreenTitle } from "../utilities/exports";
import { useLocation } from "react-router-dom";
import {
  Form,
  JobDescription,
  Completed,
  Closed,
  FYRepForm,
} from "../main/exports";
import { Preloader } from "./exports";

const Apply = () => {
  const [isMobile, setIsMobile] = useState(null);
  const [data, setData] = useState(null);
  const [normalFormState, setNormalFormState] = useState("closed");
  const [fyRepFormState, setFYRepFormState] = useState("open");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();

  const parent_route = location.state.key?.split("-")[0];
  const child_route = location.state.key?.split("-")[1];

  useEffect(() => {
    import(`../data/info/${parent_route}/${child_route}.json`).then(
      (jsondata) => {
        const data = jsondata?.default;
        setData(data);
      }
    );
  }, [parent_route, child_route]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data, normalFormState, fyRepFormState]);

  useEffect(() => {
    const normalFormStorageValue = localStorage.getItem("normalFormState");
    if (normalFormStorageValue === "completed") {
      setNormalFormState("completed");
    }

    const fyRepFormStorageValue = localStorage.getItem("fyRepFormState");
    if (fyRepFormStorageValue === "completed") {
      setFYRepFormState("completed");
    }
  }, []);

  const handleNormalFormSubmit = () => {
    localStorage.setItem("normalFormState", "completed");
    setNormalFormState("completed");
  };

  const handleFYRepFormSubmit = () => {
    localStorage.setItem("fyRepFormState", "completed");
    setFYRepFormState("completed");
  };

  let normalFormContent = null;
  let fyRepFormContent = null;

  switch (normalFormState) {
    case "open":
      normalFormContent = (
        <Form
          mobile={isMobile}
          onState={() => {
            handleNormalFormSubmit();
          }}
        />
      );
      break;
    case "closed":
      normalFormContent = <Closed mobile={isMobile} />;
      break;
    case "completed":
      normalFormContent = <Completed mobile={isMobile} />;
      break;
    default:
      normalFormContent = null;
  }

  switch (fyRepFormState) {
    case "open":
      fyRepFormContent = (
        <FYRepForm
          mobile={isMobile}
          onState={() => {
            handleFYRepFormSubmit();
          }}
        />
      );
      break;
    case "closed":
      fyRepFormContent = <Closed mobile={isMobile} />;
      break;
    case "completed":
      fyRepFormContent = <Completed mobile={isMobile} />;
      break;
    default:
      fyRepFormContent = null;
  }

  return (
    <>
      <Preloader />
      <Container
        mobile={isMobile}
        py={true}
        className={`${isMobile ? "" : "!px-20 !py-16"} ${
          isMobile ? "!px-6" : ""
        }`}
      >
        <FlexCol className="!items-start !gap-12 !w-full">
          <ScreenTitle title={data?.title} mobile={isMobile} />
          <Flex
            className="!justify-between !items-start !gap-4 !w-full"
            direction={isMobile ? "col" : "row"}
          >
            <JobDescription
              data={data}
              route={parent_route}
              mobile={isMobile}
            />
            {parent_route === "fyrep" ? fyRepFormContent : normalFormContent}
          </Flex>
        </FlexCol>
      </Container>
    </>
  );
};

export default Apply;
