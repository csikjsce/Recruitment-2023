import { memo } from "react";
import { FlexCol } from "./Flex";
import {
  ModalTitle,
  ModalSubtitle,
  CardTitle,
  CardSubtitle,
} from "./Typography";

const ModalCard = ({ title, subtitle }) => {
  return (
    <div className="bg-[#FCFEFE] p-10 rounded-lg shadow-lg">
      <FlexCol className="!items-start !justify-center !space-y-2">
        <ModalTitle text={title} />
        <ModalSubtitle text={subtitle} />
      </FlexCol>
    </div>
  );
};

const HeadsCard = memo(({ title, subtitle, image, mobile, onClick }) => {
  const size = mobile ? "!w-[70vw]" : "!w-[15vw]";
  const classes =
    "!items-start !justify-end bg-[#FCFEFE80] border-[3px] border-[#FFF] rounded-lg !h-[auto] px-4 pt-20 py-6 lg:hover:shadow-lg shadow-md gap-1 " +
    size;
  return (
    <>
      <div onClick={onClick} className="cursor-pointer transition-all">
        <FlexCol>
          <img
            src={image}
            alt="asset"
            loading="lazy"
            className="h-[150px] translate-y-16"
          />
          <FlexCol className={classes}>
            <CardTitle text={title} />
            <CardSubtitle text={subtitle} />
          </FlexCol>
        </FlexCol>
      </div>
    </>
  );
});

const MembersCard = memo(({ title, subtitle, image, mobile, onClick }) => {
  const size = mobile ? "!w-[70vw]" : "!w-[15vw]";
  const classes =
    "!items-start !justify-end bg-[#FCFEFE80] border-[3px] border-[#FFF] rounded-lg !h-[auto] px-4 pt-20 py-6 lg:hover:shadow-lg shadow-md gap-1 " +
    size;
  return (
    <>
      <div onClick={onClick} className="cursor-pointer transition-all">
        <FlexCol>
          <img
            src={image}
            alt="asset"
            loading="lazy"
            className="h-[150px] translate-y-16"
          />
          <FlexCol className={classes}>
            <CardTitle text={title} />
            <CardSubtitle text={subtitle} />
          </FlexCol>
        </FlexCol>
      </div>
    </>
  );
});

const CardContainer = ({
  children,
  mobile,
  desc,
  form,
  className,
  classFlex,
}) => {
  const size = desc
    ? !mobile
      ? "!w-[55%]"
      : "!w-full"
    : !mobile
    ? "!w-[45%]"
    : "!w-full";
  const classes =
    className + " bg-[#FCFEFE] p-10 rounded-md shadow-md gap-10 " + size;
  return (
    <div className={classes}>
      <FlexCol
        className={
          "!items-start !justify-center !space-y-2 gap-10 " + classFlex
        }
      >
        {children}
      </FlexCol>
    </div>
  );
};

export { ModalCard, HeadsCard, MembersCard, CardContainer };
