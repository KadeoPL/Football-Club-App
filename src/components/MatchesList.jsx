import Match from './Match';

export default function MatchesList({ matches }) {
    matches.map((match, index) => (
        console.log(match, index)
    ));
  
    return (
        <div>
            {matches.map((match, index) => (
                <Match key={index} formData={match} />
            ))}
        </div>
    );
}
