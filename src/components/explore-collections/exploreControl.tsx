import assets from '../../mock/assets.json'


interface ExploreControlElement{
  value?:{
    detail: string,

  }
}

const style ={
    wrapper: `flex flex-col items-center justify-center mt-[5rem]`,
    title: `text-center font-bold text-4xl`,
    container :`mt-[5rem]  w-[70rem]  flex justify-between`,
    contitle: `text-[#808080] text-base hover:text-black font-bold cursor-pointer`,

}
  
const ExploreControl: React.FC<ExploreControlElement> = () =>{
  
  return (
    <>

      <div  className='flex flex-wrap'>
        
        {assets.map((value, key) => (
          <div key={key}>
          <div>{value.detail}</div>
          {/* <div>{value.assets?.animation_url}</div> */}
          {/* <div>{asset.assets?.description}</div> */}
          </div>
        ))}
      </div>
      </>
    )
  }
  
  export default ExploreControl
