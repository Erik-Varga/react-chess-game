import React from 'react'
import { FaChessKing, FaChessQueen, FaChessBishop, FaChessKnight, FaChessRook, FaChessPawn } from "react-icons/fa";

export default function Header() {
  return (
    <div className='header flex flex-col'>
        <span>
        <FaChessKing />&nbsp;
        <FaChessQueen />&nbsp;
        <FaChessBishop />
        CHESS&nbsp;
        <FaChessKnight />&nbsp;
        <FaChessRook />&nbsp;
        <FaChessPawn />
        </span>
    </div>
  )
}
