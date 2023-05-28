import Feed from "@components/feed"

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
        <h1 className = "head_text text-center ">
            Prompts Share
            <br className = "max-md:hidden" />
            <span className = "orange_gradient text-center" >
                AI generated prompts for you to share
            </span>
        </h1>
        <p className = "desc text-center">
            Prompts Share is a place for you to share your prompts and get feedback from others.
        </p>

        <Feed />

    </section>
  )
}

export default Home