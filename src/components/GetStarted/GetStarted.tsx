import "./GetStarted.scss";
const GetStarted = () => {
  return (
    <section className="get-started" id="get-started">
      <div className="get-started__container">
        <h3 className="get-started__title">get started</h3>
        <p className="get-started__subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum
          architecto modi.
        </p>

        <div className="get-started__row rounded-sm shadow">
          <div className="col-12 col-md-6 p-5 bg-secondary">
            <div className="get-started__guarantee guarantee">
              <h4 className="guarantee__title">100% Satisfaction Guaranteed</h4>
              <p className="guarantee__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                alias optio minima, tempore architecto sint ipsam dolore tempora
                facere laboriosam corrupti!
              </p>
              <div className="">What will be the next step?</div>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 p-5 bg-white">
            <form action="">
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
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Email address"
                  className="form-control shadow-sm"
                />
              </div>
              <div className="mb-3">
                <textarea
                  rows={10}
                  placeholder="Message"
                  className="form-control shadow-sm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
