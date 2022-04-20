import './Cart.scss';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrSecure } from 'react-icons/gr';
import { MdOutlineEventAvailable } from 'react-icons/md';
import {GoThreeBars} from 'react-icons/go';
import { useState } from 'react';
function Cart({category,image,price}) {

  const [isActive,setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className='cart'>
        <div className={isActive? 'cart1 d-none':'cart1'}>
          <GoThreeBars className='GoThreeBars'  onClick={toggleClass}/>
          <div className="cart_header">
               <img src={image} alt="" />
          </div>
          <div className="cart_footer">
            <p className='cart_footer_text'>
            {category}
            </p>
            <p>
              <span className='cart_footer_price'>&euro; <b>{Math.trunc(price)}</b></span>
              <sub>incl.VAT</sub>
            </p>
          </div>
          </div>
          <div className={isActive? 'cart2':'cart2 d-none'} onClick={toggleClass}>
              <ul>
                <li> <FiEdit /> <span>Edit</span></li>
                <li> <MdOutlineEventAvailable /> <span>Avilabilty</span></li>
                <li> <GrSecure /> <span>Make Privacy</span></li>
                <li className='delete'> <RiDeleteBinLine/> <span>Delete</span></li>
              </ul>
          </div>
      </div>
    </>
  );
}

export default Cart;
