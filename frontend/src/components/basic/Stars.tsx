export function Stars({rating}:{rating:number}){
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
        } else {
            stars.push(<span key={i} className="text-gray-400">&#9734;</span>);
        }
    }
    return <div className="flex">{stars}</div>;
}