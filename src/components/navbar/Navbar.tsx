import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import opensealogo from '../../assets/img/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
  nav: `hidden lg:flex`,
  dropcontainer: ``,
  container: `sticky top-0 z-10 bg-white`,
  wrapper: ` bg-white w-screen px-[1.1rem] py-[0.8rem] flex shadow-[0_35px_60px_-2px_rgba(0,0,0,0.2)]`,
  logoContainer: `flex mr-[10rem] items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-black font-bold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[600px] items-center bg-[#fffff] rounded-[0.6rem] border-solid border-2 border-slate-300`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0  ring-0 px-2 pl-0 text-[black] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#808080]  hover:text-black cursor-pointer`,
  navmaincon: ` w-[14rem] bg-white mt-3 shadow-[0_35px_60px_-2px_rgba(0,0,0,0.2)] rounded-b-lg `,
  navcon: `text-white px-4 font-bold text-[#808080]  hover:text-black cursor-pointer h-12 border-b-[1px] items-baseline  hover:shadow-[0px_0px_5px_3px_rgba(0,0,0,0.2)]`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-black cursor-pointer`,
  context: `pt-3 pb-3 text-[#808080]`,
}

const Navbar = () => {
  return (
    <div className={style.nav}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <Link href="/">
            <div className={style.logoContainer}>
              <Image src={opensealogo} height={40} width={40} />
              <div className={style.logoText}>OpenSea</div>
            </div>
          </Link>
          <div className={style.searchBar}>
            <div className={style.searchIcon}>
              <AiOutlineSearch />
            </div>
            <input
              className={style.searchInput}
              placeholder="Search items, collections, and accounts"
            />
          </div>
          <div className={style.headerItems}>
            <div className="group dropdown relative  cursor-pointer px-4 font-bold tracking-wide text-[#808080] hover:text-black">
              <Link href="/explore-collections">
                <div className={style.headerItem}>
                  <div className={style.context}>Explore</div>
                </div>
              </Link>

              <div className="dropdown-menu absolute hidden h-auto group-hover:block">
                <ul className={style.navmaincon}>
                  <Link href="/assets">
                    <div className={style.navcon}>
                      <div className={style.context}>All NFTs </div>
                    </div>
                  </Link>
                  <Link href="/collection/art">
                    <div className={style.navcon}>
                      <div className={style.context}>Art</div>
                    </div>
                  </Link>
                  <Link href="/collection/collectibles">
                    <div className={style.navcon}>
                      <div className={style.context}>Collectibles</div>
                    </div>
                  </Link>
                  <Link href="/collection/domain-names">
                    <div className={style.navcon}>
                      <div className={style.context}>Domain Names</div>
                    </div>
                  </Link>
                  <Link href="/collection/music">
                    <div className={style.navcon}>
                      <div className={style.context}>Music</div>
                    </div>
                  </Link>
                  <Link href="/collection/photography-category">
                    <div className={style.navcon}>
                      <div className={style.context}>Photography</div>
                    </div>
                  </Link>
                  <Link href="/collection/sports">
                    <div className={style.navcon}>
                      <div className={style.context}>Sports</div>
                    </div>
                  </Link>
                  <Link href="/collection/trading-cards">
                    <div className={style.navcon}>
                      <div className={style.context}>Trading Cards</div>
                    </div>
                  </Link>
                  <Link href="/collection/utility">
                    <div className={style.navcon}>
                      <div className={style.context}>Utility</div>
                    </div>
                  </Link>
                  <Link href="/collection/virtual-worlds">
                    <div className={style.navcon}>
                      <div className={style.context}>Virtual Worlds</div>
                    </div>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="group dropdown relative  cursor-pointer px-4 font-bold tracking-wide text-[#808080] hover:text-black">
              <Link href="/rankings">
                <div className={style.headerItem}>
                  <div className={style.context}>Stats</div>
                </div>
              </Link>

              <div className="dropdown-menu absolute hidden h-auto group-hover:block">
                <ul className={style.navmaincon}>
                  <Link href="/rankings">
                    <div className={style.navcon}>
                      <div className={style.context}>Rankings </div>
                    </div>
                  </Link>
                  <Link href="/activity">
                    <div className={style.navcon}>
                      <div className={style.context}>Activity</div>
                    </div>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="group dropdown relative  cursor-pointer px-4 font-bold tracking-wide text-[#808080] hover:text-black">
              <a
                href="https://support.opensea.io/hc/en-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={style.headerItem}>
                  <div className={style.context}>Resources</div>
                </div>
              </a>
              <div className="dropdown-menu absolute hidden h-auto group-hover:block">
                <ul className={style.navmaincon}>
                  <div className={style.navcon}>
                    <div className={style.context}>Help Ceenter </div>
                  </div>
                  <div className={style.navcon}>
                    <div className={style.context}>Platform Status</div>
                  </div>
                  <div className={style.navcon}>
                    <div className={style.context}>Partners</div>
                  </div>
                  <div className={style.navcon}>
                    <div className={style.context}>Gas-Free Marketplace</div>
                  </div>
                  <div className={style.navcon}>
                    <div className={style.context}>Blog</div>
                  </div>
                  <div className={style.navcon}>
                    <div className={style.context}>Docs</div>
                  </div>
                  <div className={style.navcon}>
                    <div className={style.context}>Newsletter</div>
                  </div>
                  <div className={style.navcon}>
                    <div className={style.context}> </div>
                  </div>
                </ul>
              </div>
            </div>
            <Link href="https://opensea.io/login?referrer=%2Fasset%2Fcreate">
              <div className={style.headerItem}>
                <div className={style.context}>Create</div>
              </div>
            </Link>
            <Link href="/login">
              <div className={style.headerIcon}>
                <CgProfile />
              </div>
            </Link>
            <Link href="/walllet">
              <div className={style.headerIcon}>
                <MdOutlineAccountBalanceWallet />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
