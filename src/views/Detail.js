import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
            setLoading(false);
            return res.json();
        })
            .then((res) => {
            setData(res);
            console.log(res);
            setLoading(false);
        })
            .catch((err) => {
            console.log("fetch error", err);
        });
    }, [id]);
    if (!data)
        return _jsx("p", { className: "text-center", children: "No product found" });
    return (_jsx("div", { className: "w-full grid-cols-4 items-center", children: loading ? (_jsx("div", { className: "", children: _jsx("p", { children: "Loading.." }) })) : (_jsx("div", { className: "w-full flex flex-wrap items-stretch", children: _jsx("div", { className: "p-2 w-full flex justify-center", children: _jsxs("div", { className: "w-full bg-purple-300 rounded-lg flex flex-col md:flex-row items-center justify-evenly p-4", children: [_jsx("img", { src: data.image, className: "w-4/12 md:w-2/12 rounded-lg" }), _jsxs("div", { className: "w-full md:w-8/12 flex flex-col justify-center md:pl-8 text-center md:text-start mt-6 md:mt-0", children: [_jsxs("p", { className: "font-bold", children: [data.price, " $ "] }), _jsx("p", { className: "font-bold text-md", children: data.title }), _jsx("p", { className: "text-black/60 text-sm text-start", children: data.description }), _jsx("button", { className: "bg-purple-900 p-2 rounded-lg mt-4 text-white hover:bg-purple-900/80 active:scale-95 transition-all", children: "Add to Cart" })] })] }) }) })) }));
}
