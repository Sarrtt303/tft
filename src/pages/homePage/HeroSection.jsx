import React from 'react'
import LandingDesign from '../../assets/svgComponents/LandingDesign'
import { CiTimer } from 'react-icons/ci'
import { AiOutlineBarChart } from 'react-icons/ai'
import { BsBarChart } from 'react-icons/bs'
import { TbCurrencyDollarOff } from 'react-icons/tb'
import { BiTrendingDown } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
const HeroSection = () => {
    return (
        <div className="bg-[#222222] flex flex-row items-center justify-between px-20">
            <div>
                <h2 className="text-2xl font-bold text-[3rem] text-[#FF3D55] whitespace-nowrap py-4">Crypto for everyone</h2>
                <h3 className="font-[400px] text-[1.5rem] text-white leading-7">Borrow for Spot / Margin / Futures Trading or staking to earn high APY.</h3>
                <div className="grid grid-cols-2 text-white grid-flow-row gap-4 mt-10">
                    <div className="flex flex-row items-center gap-2">
                        <CiTimer className="text-[#7BAD4F] font-bold" />
                        <p className="text-[#DCDCDC]">Repay at anytime</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <TbCurrencyDollarOff className="text-[#7BAD4F] font-bold" />
                        <p className="text-[#DCDCDC]">No transaction fee</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <BiTrendingDown className="text-[#7BAD4F] font-bold" />
                        <p className="text-[#DCDCDC]">Low rate loan staking</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <BsBarChart className="text-[#7BAD4F] font-bold" />
                        <p className="text-[#DCDCDC]">Partial liquidation</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 justify-start">
                        <AiOutlineBarChart className="text-[#7BAD4F] font-bold" />
                        <p className="text-[#DCDCDC] whitespace-nowrap w-[80%]">Simple Earn (Flexible) asset can be used as collateral</p>
                    </div>
                </div>
                <div className="flex flex-row items-center mt-10 gap-4">
                    <button className="text-[#DCDCDC] bg-[#0F0F10] rounded-md px-6 py-2 flex flex-row items-center gap-2">
                        Let's Get Startted
                        <IoIosArrowForward />
                    </button>
                    <button className="text-[#DCDCDC] bg-[#0F0F1040] rounded-md px-6 py-2 flex flex-row items-center gap-2">
                        Know More About Us

                    </button>
                </div>

            </div>
            <div className="pb-10">
                <LandingDesign />
            </div>
        </div>
    )
}

export default HeroSection