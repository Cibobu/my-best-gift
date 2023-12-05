/* eslint-disable @next/next/no-img-element */
'use client'
import { Button, Divider } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import bg from '../../public/bg/BG-2.png'
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from "next-share"

export default function QuizLayout() {
    const ref = useRef<HTMLDivElement>(null)
    const [initialFlag, setInitialFlag] = useState<number>(0)

    useEffect(() => {
      const Timeout = setTimeout(() => {
        setInitialFlag(1)
      }, 2500);

      return () => {
        Timeout
      }
    },[])

    return (
      <div className="w-full lg:min-h-screen bg-white" ref={ref}>
        <div className="container mx-auto p-[20px] max-w-[450px] h-full flex flex-col justify-between">
          <div className="relative bg-[#24282D] h-full w-full rounded-3xl">
            <h1 className="relative text-start color-white mt-[80px] mobile:text-[8vw] mobile:w-[54vw] mobile:leading-[11vw] mobile:left-[26vw] desktop:text-[40px] desktop:w-[280px] desktop:leading-[50px] desktop:left-[90px]">
                Best <span className="rounded-[100px] bg-[#F6AE70] mobile:p-[5px 25px] desktop:py-[5px] desktop:px-[10px]">gifts</span> for me
            </h1>
            <div className="flex gap-[12px] mt-6 rounded-3xl border-white border-2 mx-[16px] justify-between items-center">
              <div className="flex">
                  <img src="asset/diffuser.png" alt=""/>
              </div>
              <div className="text-[16px] text-white">Diffuser Humidifier Harmony 3 - Bathaholic</div>
              <div className="flex relative">
                  <img src="asset/basket.png" alt="" style={{ width: '80%'}}/>
              </div>
            </div>
            <div className="flex gap-[12px] mt-6 rounded-3xl border-white border-2 mx-[16px] justify-between items-center">
              <div className="flex">
                  <img src="asset/diffuser.png" alt=""/>
              </div>
              <div className="text-[16px] text-white">Diffuser Humidifier Harmony 3 - Bathaholic</div>
              <div className="flex relative">
                  <img src="asset/basket.png" alt="" style={{ width: '80%'}}/>
              </div>
            </div>
            <div className="flex gap-[12px] mt-6 rounded-3xl border-white border-2 mx-[16px] justify-between items-center">
              <div className="flex">
                  <img src="asset/diffuser.png" alt=""/>
              </div>
              <div className="text-[16px] text-white">Diffuser Humidifier Harmony 3 - Bathaholic</div>
              <div className="flex relative">
                  <img src="asset/basket.png" alt="" style={{ width: '80%'}}/>
              </div>
            </div>
            <div className="flex gap-[12px] mt-6 rounded-3xl border-white border-2 mx-[16px] justify-between items-center">
              <div className="flex">
                  <img src="asset/diffuser.png" alt=""/>
              </div>
              <div className="text-[16px] text-white">Diffuser Humidifier Harmony 3 - Bathaholic</div>
              <div className="flex relative">
                  <img src="asset/basket.png" alt="" style={{ width: '80%'}}/>
              </div>
            </div>
            <div className="flex gap-[12px] mt-6 rounded-3xl border-white border-2 mx-[16px] justify-between items-center">
              <div className="flex">
                  <img src="asset/diffuser.png" alt=""/>
              </div>
              <div className="text-[16px] text-white">Diffuser Humidifier Harmony 3 - Bathaholic</div>
              <div className="flex relative">
                  <img src="asset/basket.png" alt="" style={{ width: '80%'}}/>
              </div>
            </div>
            {/* footer */}
            <div className="flex text-center my-[40px] justify-center">
              Share this!
            </div>
            <div className="relative my-[40px] mx-[16px]">
              <input
                type="search"
                id="search"
                className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Link"
                required />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#080B24] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2"
              >Copy</button>
            </div>
            <div className="flex justify-center gap-[16px] mb-8">
              <div className="flex rounded-full p-[8px] bg-white">
                <FacebookShareButton
                  url={'https://github.com/next-share'}
                  quote={'next-share is a social share buttons for your next React apps.'}
                  hashtag={'#nextshare'}
                >
                  <FacebookIcon size={40} round />
                </FacebookShareButton>
              </div>
              {/* <div className="flex rounded-full p-[8px] bg-white">
                <FacebookShareButton
                  url={'https://github.com/next-share'}
                  quote={'next-share is a social share buttons for your next React apps.'}
                  hashtag={'#nextshare'}
                >
                  <FacebookIcon size={40} round />
                </FacebookShareButton>
              </div> */}
              <div className="flex rounded-full p-[8px] bg-white">
                <WhatsappShareButton
                  url={'https://github.com/next-share'}
                  title={'next-share is a social share buttons for your next React apps.'}
                  separator=":: "
                >
                  <WhatsappIcon size={40} round />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}