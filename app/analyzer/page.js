import styles from '../../styles'; // Adjust the path according to the new folder structure

const Analyzer = () => (
  <div className="relative bg-primary-black overflow-hidden min-h-screen">
    {/* Background Gradients */}
    <div className="absolute inset-0 z-0">
      <div className="gradient-03 z-0" />
      <div className="gradient-04 z-0" />
    </div>

    {/* Main Content */}
    <div className={`${styles.flexCenter} relative z-10 h-screen`}>
      <h1 className="text-white text-4xl font-bold">Analyzer Page</h1>
    </div>
  </div>
);

export default Analyzer;
