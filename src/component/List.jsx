import { useState } from 'react';
import data from '../data'

const List = () => {
  let [shoes] = useState(data);

 return (
   <div className="row">
      {shoes.map((item) => {
          return (
              <div className="col-md-4" key={item.id}>
                <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} width="80%" />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.price}</p>
              </div>
          )
      })}
   </div>
 );
};

export default List;