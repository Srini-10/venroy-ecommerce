import './Skeleton.css';

function Skeleton({ type = 'card', count = 1 }) {
    const skeletons = Array.from({ length: count }, (_, index) => index);

    if (type === 'card') {
        return (
            <>
                {skeletons.map((i) => (
                    <div key={i} className="skeleton-card">
                        <div className="skeleton-image"></div>
                        <div className="skeleton-content">
                            <div className="skeleton-title"></div>
                            <div className="skeleton-text"></div>
                            <div className="skeleton-text short"></div>
                        </div>
                    </div>
                ))}
            </>
        );
    }

    if (type === 'list') {
        return (
            <>
                {skeletons.map((i) => (
                    <div key={i} className="skeleton-list-item">
                        <div className="skeleton-avatar"></div>
                        <div className="skeleton-list-content">
                            <div className="skeleton-title"></div>
                            <div className="skeleton-text short"></div>
                        </div>
                    </div>
                ))}
            </>
        );
    }

    return (
        <div className="skeleton-line"></div>
    );
}

export default Skeleton;
