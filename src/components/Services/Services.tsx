import  "./Services.scss";
import { Icon } from "@iconify/react";
import service1 from "@/assets/images/services/service-1.png";
import service2 from "@/assets/images/services/service-2.png";
import service3 from "@/assets/images/services/service-3.png";
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="co">
              <h3 className="text-center">Our Services</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              Our Services Range From Initial Design To Deployment Anywhere
              Anytime
            </div>
            <div className="col">
              
            Lorem ipsum dolor sit amet consectetur architecto magni, 
            dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. 
            Tempore ducimus molestiae in dolore enim.
          
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <div className="d-flex gap-2">
                <h4>Cloud Hosting</h4>
                <Icon icon="tabler:upload" width={36} />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium voluptatem dignissimos quas totam similique officiis
                tempore dolore ut asperiores, porro reiciendis optio. Explicabo
                culpa dolorem repudiandae, quod recusandae totam quo?
              </p>
              <a
                href=""
                className="btn border border-primary rounded-pill d-inline-flex align-items-center gap-2"
              >
                <span>learn more</span>
                <Icon
                  icon="tabler:arrow-right"
                  width={36}
                  className="bg-primary rounded-pill text-white p-1"
                />
              </a>
            </div>
            <div className="col-12 col-md-4">
              <img
                className="w-100"
                src={service1}
                title="service1"
                alt="service1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-4">
              <img
                className="w-100"
                src={service2}
                title="service2"
                alt="service2"
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex gap-2">
                <h4>Web Development</h4>
                <Icon icon="tabler:upload" width={36} />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium voluptatem dignissimos quas totam similique officiis
                tempore dolore ut asperiores, porro reiciendis optio. Explicabo
                culpa dolorem repudiandae, quod recusandae totam quo?
              </p>
              <a
                href=""
                className="btn border border-primary rounded-pill d-inline-flex align-items-center gap-2"
              >
                <span>learn more</span>
                <Icon
                  icon="tabler:arrow-right"
                  width={36}
                  className="bg-primary rounded-pill text-white p-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <div className="d-flex gap-2">
                <h4>Cloud Hosting</h4>
                <Icon icon="tabler:upload" width={36} />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium voluptatem dignissimos quas totam similique officiis
                tempore dolore ut asperiores, porro reiciendis optio. Explicabo
                culpa dolorem repudiandae, quod recusandae totam quo?
              </p>
              <a
                href=""
                className="btn border border-primary rounded-pill d-inline-flex align-items-center gap-2"
              >
                <span>learn more</span>
                <Icon
                  icon="tabler:arrow-right"
                  width={36}
                  className="bg-primary rounded-pill text-white p-1"
                />
              </a>
            </div>
            <div className="col-12 col-md-4">
              <img
                className="w-100"
                src={service3}
                title="service3"
                alt="service3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
