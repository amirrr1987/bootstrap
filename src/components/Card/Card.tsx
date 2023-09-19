const Card = () => {
    return (
        <figure className="card">
            <img src="card-img-top" alt="" />
            <figcaption className="card-body">
                <h4 className="card-titlr">title</h4>
                <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, similique.
                </p>
                <a href="" className="btn btn-info">more</a>
            </figcaption>
        </figure>
    )
}
export default Card