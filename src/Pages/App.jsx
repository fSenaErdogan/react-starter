import { Link } from "react-router-dom"


function App() {

  return (
    <>
      <div className='grid grid-cols-5 gap-2  bg-gray-100/20 shadow-lg rounded-b-lg'>
        <div className="flex flex-nowrap gap-2 m-2">

          {/* içindeki ürün kartı dönecek olan o */}
          <div className="bg-gray-200/80 border p-1 flex flex-col justify-between">
            <div className="aspect-w-1 ">
              <div className="flex justify-center p-1">
                yıldızlar
              </div>
              <Link to={`/blog_detail`}>{/* blog ismine göre detay sayfasına gidilecek*/}
                blog resmi
              </Link>
            </div>
            <div className=" border-t border-slate-50 h-full m-1 p-1">
              <Link to={`/blog_detail`} className="text-sm py-1">{/* blog ismine göre detay sayfasına gidilecek*/}
                {/* {product.name.length > 19 ? product.name.slice(0, 19) + "..." : product.name} */}
                blog ismi
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
