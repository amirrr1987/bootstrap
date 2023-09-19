import { Icon } from "@iconify/react";

const Services = () => {
  return (
    <section id="services">
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
                src="https://themewagon.github.io/patrix/images/services/service-1.png"
                alt=""
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
                src="https://themewagon.github.io/patrix/images/services/service-2.png"
                alt=""
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
                src="https://themewagon.github.io/patrix/images/services/service-3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
