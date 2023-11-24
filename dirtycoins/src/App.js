import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/Router'
import { Fragment } from 'react'
import DefaultLayout from './Layout/DefaultLayout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DetailProduct from './pages/DetailProduct'
import DetailNews from './pages/DetailNews'

function App() {

    const [productState, setProductState] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/data')
                setProductState(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        getProducts()
    }, [])

    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        const getNewsList = async () => {
            try {
                const response = await axios.get('http://localhost:4000/data/news')
                setNewsList(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        getNewsList()
    }, [])

    const [cart, setCart] = useState([])

    let cartAmount = cart.length

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        const Page = route.component

                        let data
                        if (route.data === 'products') {
                            data = productState
                        } else if (route.data === 'news') {
                            data = newsList
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout cartAmount={cartAmount}>
                                        <Page data={data} cart={cart} setCart={setCart} />
                                    </Layout>
                                }
                            />
                        )
                    })}
                    {productState.map((product, index) => {
                        let Layout = DefaultLayout

                        if (product.layout) {
                            Layout = product.layout
                        } else if (product.layout === null) {
                            Layout = Fragment
                        }

                        const Page = DetailProduct

                        return (
                            <Route
                                key={index}
                                path={product.slug}
                                element={
                                    <Layout>
                                        <Page
                                            product={product}
                                            productList={productState}
                                            cart={cart}
                                            setCart={setCart}
                                        />
                                    </Layout>
                                }
                            />
                        )
                    })}
                    {newsList.map((post, index) => {
                        let Layout = DefaultLayout

                        if (post.layout) {
                            Layout = post.layout
                        } else if (post.layout === null) {
                            Layout = Fragment
                        }

                        const Page = DetailNews

                        return (
                            <Route
                                key={index}
                                path={post.slug}
                                element={
                                    <Layout>
                                        <Page post={post} postList={newsList} />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
