import "../Blog/BlogBody.css";

const articles = [
  {
    title: "Exercise before Sleep for Better Rest",
    content:
      "Read an article from Harvard Medical School about the benefits of exercising before sleep.",
    link: "https://www.health.harvard.edu/staying-healthy/does-exercising-at-night-affect-sleep#:~:text=The%20takeaway%3A%20Getting%20regular%20exercise,adopt%20a%20relaxing%20bedtime%20routine.",
    image: "/gym-training.jpg",
  },
  {
    title: "Avoiding Blue Light Before Bedtime",
    content:
      "Read an article from the National Sleep Foundation about the effects of blue light on sleep.",
    link: "https://www.sleepfoundation.org/bedroom-environment/blue-light",
    image: "/blue-light.jpg",
  },
  {
    title: "The Importance of Hydration for Better Sleep",
    content:
      "Read an article from the Cleveland Clinic about the importance of hydration for better sleep.",
    link: "https://health.clevelandclinic.org/drink-water-before-bed/",
    image: "/drink-water.jpg",
  },
  {
    title: "Optimizing Sleep with a Cool Room Environment",
    content:
      "Read an article from the National Center for Biotechnology Information about the effects of room temperature on sleep.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5446217/",
    image: "/cool-room.jpg",
  },
];

function BlogBody() {
  return (
    <main>
      <div className="blog-container">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img
              className="article-image"
              src={article.image}
              alt={article.title}
            />
            <h2>{article.title}</h2>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              <p>{article.content}</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BlogBody;
