import { Icon } from "@iconify/react/dist/iconify.js";
import "./GetStarted.scss";
const GetStarted = () => {
  return (
    <section className="started" id="get-started">
      <div className="started__container">
        <div className="started__row">
          <div className="started__col">
            <h3 className="started__title text-center">get started</h3>
            <hr className="started__divider" />
            <p className="started__subtitle text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              illum architecto modi.
            </p>
          </div>
        </div>

        <div className="started__row">
          <div className="started__col">
            <div className="started__box">
              <div className="started__content">
                <h4 className="started__title">100% Satisfaction Guaranteed</h4>
                <p className="started__subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam alias optio minima, tempore architecto sint ipsam
                  dolore tempora facere laboriosam corrupti!
                </p>
                <h3 className="display-3--brief">
                  What will be the next step?
                </h3>
                <ul className="cta-info__list">
                  <li>We'll prepare the proposal.</li>
                  <li>we'll discuss it together.</li>
                  <li>let's start the discussion.</li>
                </ul>
              </div>
              <form action="" className="started__form">
                <legend className="started__form-legend">
                  Start Your Project
                </legend>
                <div className="mb-3 d-flex gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control shadow-sm"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Email address"
                  className="started__form-email"
                />

                <textarea
                  rows={10}
                  placeholder="Message"
                  className="started__form-message"
                />
                <button type="button" className="started__form-btn">
                  <span>Submit</span>
                  <Icon icon="tabler:send" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
