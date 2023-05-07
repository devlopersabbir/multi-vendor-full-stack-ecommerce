import ContentLoader from "react-content-loader";

const SkeletonBox = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
        <ContentLoader
          key={i}
          speed={2}
          width={264}
          height={120}
          viewBox="0 0 264 120"
          backgroundColor="#fcfcfc"
          foregroundColor="#e6e6e6"
        >
          <rect x="2" y="2" rx="12" ry="12" width="264" height="120" />
        </ContentLoader>
      ))}
    </>
  );
};

export default SkeletonBox;
