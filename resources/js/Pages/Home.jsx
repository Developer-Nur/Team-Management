import Layout from "../Layout/Layout"

function Home({ team }) {
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold text-blue-500">
                    Team task management!
                </h1>
                <p className="text-3xl font-bold text-blue-500">Hello Team {team}</p>
            </div>
        </>
    )
}

Home.layout = page => <Layout children={page} />
export default Home