import "./Companies.scss";
import company1 from "../../assets/images/companies/company-1.png";
import company2 from "../../assets/images/companies/company-2.png";
import company3 from "../../assets/images/companies/company-3.png";
import company4 from "../../assets/images/companies/company-4.png";
import company5 from "../../assets/images/companies/company-5.png";
import company6 from "../../assets/images/companies/company-6.png";
const Companies = () => {
  return (
    <section className="companies">
      <div className="companies__container">
        <div className="companies__row">
            <div className="companies__col">
                <h3 className="companies__title">Trusted by companies like</h3>
                <hr className="companies__divider" />
            </div>
        </div>
        <div className="companies__row">
          <div className="companies__col">
            <div className="companies__box">
              <img className="companies__image" src={company1} title="" alt="" />
            </div>
          </div>
          <div className="companies__col">
            <div className="companies__box">
              <img className="companies__image" src={company2} title="" alt="" />
            </div>
          </div>
          <div className="companies__col">
            <div className="companies__box">
              <img className="companies__image" src={company3} title="" alt="" />
            </div>
          </div>
          <div className="companies__col">
            <div className="companies__box">
            <img className="companies__image" src={company4} title="" alt="" />
            </div>
          </div>
          <div className="companies__col">
            <div className="companies__box">
            <img className="companies__image" src={company5} title="" alt="" />
            </div>
          </div>
          <div className="companies__col">
            <div className="companies__box">
            <img className="companies__image" src={company6} title="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
