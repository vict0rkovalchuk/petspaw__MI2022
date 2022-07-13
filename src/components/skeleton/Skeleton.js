import './skeleton.scss';

const Skeleton = () => {
  return (
    <>
      <p className="cat__vote">Here will be displayed your action history</p>
      <div className="skeleton">
        <div className="skeleton-animate pulse skeleton__block"></div>
        <div className="skeleton-animate pulse skeleton__block"></div>
        <div className="skeleton-animate pulse skeleton__block"></div>
      </div>
    </>
  );
};

export default Skeleton;
