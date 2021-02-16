
import './Card.css';

function Card({name,email,id}) {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}`} alt="roboat" height="200"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    
    </div>
  );
}

export default Card;
