import { Icon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black py-5">
        <div className="container">
          <div className="row">
            <div className="col d-flex gap-2 align-items-center">
              <Icon
                icon="tabler:phone-call"
                width={64}
                className="text-primary"
              />
              <div className="">
                <div className="text-white">+989198881400</div>
                <div className="text-white">Mon-Fri 9am-6pm</div>
              </div>
            </div>
            <div className="col d-flex gap-2 align-items-center">
              <Icon icon="tabler:mail" width={64} className="text-primary" />
              <div className="">
                <div className="text-white">+989198881400</div>
                <div className="text-white">Mon-Fri 9am-6pm</div>
              </div>
            </div>
            <div className="col d-flex gap-2 align-items-center">
              <Icon
                icon="tabler:location"
                width={64}
                className="text-primary"
              />
              <div className="">
                <div className="text-white">+989198881400</div>
                <div className="text-white">Mon-Fri 9am-6pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5">
        <div className="container">
          <div className="row">
            <div className="col">connect with us on social media</div>
            <div className="col d-flex gap-2">
              <a href="#">
                <Icon icon="cib:facebook" width={24} className="text-white" />
              </a>
              <a href="#">
                <Icon icon="cib:twitter" width={24} className="text-white" />
              </a>
              <a href="#">
                <Icon icon="cib:instagram" width={24} className="text-white" />
              </a>
              <a href="#">
                <Icon icon="cib:linkedin" width={24} className="text-white" />
              </a>
              <a href="#">
                <Icon icon="cib:youtube" width={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5">
        <div className="container">
          <div className="row">
            <div className="col">item</div>
            <div className="col">item</div>
            <div className="col">item</div>
            <div className="col">item</div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5">
        <div className="container">
          <div className="row">
            <div className="col">item</div>
          </div>
          <div className="row">
            <div className="col">item</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
