

export default function portfolioCard(props) {
    return (
        <section class="work-section">
            <aside class="work-header">
                <h1> Work</h1>
            </aside>
            {props.projects.map(item => (
                <aside id="work" className="work" key={item.id}>
                    <fig className="work-card" style={{backgroundImage: `${item.imgUrl}`}}>
                        <a href={item.link}>
                        <div className="card-title">
                            <h2> {item.name} </h2>
                            <h5> {item.tech}</h5>

                        </div>
                        </a>
                    </fig>
                </aside>
            ))}
        </section>
    );
}