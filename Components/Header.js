import React,{useState, useEffect} from 'react'
import Image from 'next/image';
import {FiArrowUpRight} from 'react-icons/fi';
import {AiOutlineDown} from 'react-icons/ai';
import {HiOutlineDotsVertical} from 'react-icons/hi';
import ethLogo from '../assets/eth.png';
import uniSwapLogo from '../assets/uniswap.png';


const style = {};

const Header = () => {
    const [selectedNav, setSelectedNav] = useState('swap');
  return (
    <div className={style.wrapper}>
        <div className={style.headerLogo}>
            <Image src={uniSwapLogo} alt='uniswap' height={40} width={40} />
        </div>
        <div className={style.nav}>
            <div className={style.navItemsContainer}>
                
            </div>

        </div>
    </div>
  )
}

export default Header