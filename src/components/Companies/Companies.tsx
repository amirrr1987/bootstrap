import "./Companies.scss";
import company1 from "../../assets/images/companies/company-1.png";
import company2 from "../../assets/images/companies/company-2.png";
import company3 from "../../assets/images/companies/company-3.png";
import company4 from "../../assets/images/companies/company-4.png";
import company5 from "../../assets/images/companies/company-5.png";
import company6 from "../../assets/images/companies/company-6.png";
const Companies = () => {
  return (
    <section className="py-12 companies">
      <div className="container">
        <div className="row">
            <div className="col">
                <h3 className="text-center mb-5">Trusted by companies like</h3>
            </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="shadow-sm p-3 rounded">
              <img className="w-100" src={company1} title="" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="shadow-sm p-3 rounded">
              <img className="w-100" src={company2} title="" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="shadow-sm p-3 rounded">
              <img className="w-100" src={company3} title="" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="shadow-sm p-3 rounded">
            <img className="w-100" src={company4} title="" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="shadow-sm p-3 rounded">
            <img className="w-100" src={company5} title="" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="shadow-sm p-3 rounded">
            <img className="w-100" src={company6} title="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
