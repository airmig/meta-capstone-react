import { testimonials } from "../util/testimonialdb";
function Testimonials(){
    return     <div className="row">
        <div className="px-8 text-center testimonial-container">

            <sub className="specials-subtitle">Customer Approval</sub>
            <h1 className="specials-title">Testimonials</h1>
            {
                testimonials.map(comment=>
                    <div  key={comment.id} className="col mx-auto testimonial">
                         <img height="20px" className="mt-3" src="rating.png" alt="Rating" />
                    <p className="lead mb-4 testimonial-description">
                    "{comment.testimonial}"
                    </p>
                   
                    <img src={comment.image} alt={comment.name} className="testimonial-img"/>
                    <p>{comment.name}</p>
                    </div>   
                )
            }

            
            </div>
        </div>
}
export default Testimonials;