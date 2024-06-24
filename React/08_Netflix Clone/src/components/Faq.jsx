import MainHeading from "./MainHeading";
import Input from "./Input";
import SmallHeading from "./SmallHeading";
import data from "./data";
import AccordianItem from "./AccordianItem";

const Faq = () => {
  return (
    <div className="faq_container">
      <MainHeading heading={"Frequently Asked Questions"} />
      <div className="accordian_container">
        {data.map((elem) => {
          return (
            <AccordianItem
              key={elem.id}
              question={elem.heading}
              para1={elem.para1}
              para2={elem.para2}
            />
          );
        })}
      </div>
      <>
        <SmallHeading
          heading={
            "Ready to watch? Enter your email to create or restart your membership."
          }
        />
        <Input />
      </>
    </div>
  );
};

export default Faq;
