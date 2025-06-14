import { useState } from "react";
import upload from "../assets/upload.png";
import stats from "../assets/stats.png";

const UploadSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [prediction, setPrediction] = useState(null); // Store prediction data
  const [heatmapImage, setHeatmapImage] = useState(null); // Store base64 heatmap

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setPrediction(null);
    setHeatmapImage(null);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      console.log("Sending API request to http://127.0.0.1:8000/predict");
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API response:", data);
      setPrediction(data.prediction || { label: "N/A", confidence: 0 });
      setHeatmapImage(data.heatmap_image_base64 || null);
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setIsLoading(false);
      console.log("Request complete");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png"].includes(file.type)) {
      setSelectedImage(file);
    } else {
      setSelectedImage(null);
      alert("Only .jpg, or .png files are allowed.");
    }
  };

  return (
    <section id="upload" className="py-8 md:py-20">
      <div className="container mx-auto px-10 md:px-16 xl:px-24">
        <div className="text-center text-white mb-8 md:mb-24">
          <h2 className="text-section-title xl:text-section-title-xl mb-3">
            See our <span className="text-xpose-green">Xpose</span> Detection
            tools in action.
          </h2>
          <p className="text-xpose-text-secondary text-base xl:text-[20px] leading-10">
            Upload your image here to test our model in real-time!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 min-h-[400px] md:h-[80vh]">
          {/* Upload Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0E1426] p-6 rounded-lg min-w-[60%] flex flex-col min-h-[400px]"
          >
            <div className="flex justify-between items-center text-white">
              <div>
                <p className="m-0 text-sm md:text-lg leading-6">
                  Upload your image
                </p>
                <p className="m-0 text-sm leading-6">
                  Only support .jpg, and .png files
                </p>
              </div>
              {prediction ? (
                <button
                  className="py-2 px-4 bg-[#008BD1] rounded-lg text-white"
                  type="reset"
                  onClick={() => {
                    setHeatmapImage(null);
                    setIsLoading(false);
                    setPrediction(null);
                    setSelectedImage(null);
                  }}
                >
                  Reset
                </button>
              ) : (
                <button
                  className="py-2 px-4 bg-[#008BD1] rounded-lg text-white"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Fetching Results ..." : "Upload"}
                </button>
              )}
            </div>

            {/* Upload Area or Image Preview */}
            <div className="mt-4 overflow-hidden flex-grow bg-[#121A31] border border-dashed border-[#008BD1] rounded-lg flex flex-col justify-center items-center text-white text-sm gap-2">
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="preview"
                  className="max-h-full max-w-full object-contain rounded-md"
                />
              ) : (
                <>
                  <div className="text-3xl text-[#00F0FF]">
                    <img
                      src={upload}
                      alt="Upload Icon"
                      className="w-[60px] h-[42px]"
                    />
                  </div>
                  <p>Drag your file(s) to start uploading</p>
                  <span className="text-gray-400">OR</span>
                  <label className="bg-white text-black py-1 px-3 rounded-md text-sm font-semibold cursor-pointer">
                    Browse files
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </>
              )}
            </div>
          </form>

          {/* Summary and Results Section */}
          <div className="flex flex-col gap-4 w-full">
            <div className="bg-[#0E1426] p-6 rounded-lg text-white">
              <p className="text-base leading-8 border-l-2 border-blue-500 pl-4 mb-4">
                Summary
              </p>
              <div
                className={`flex justify-center ${
                  !prediction && "bg-[#121A31]"
                } items-center h-40`}
              >
                {isLoading ? (
                  <div className="w-10 h-10 border-4 border-t-white border-[#04FEC1] rounded-full animate-spin"></div>
                ) : prediction ? (
                  <>
                    <div className="flex flex-col justify-between h-full">
                      <p className="text-xl">
                        The input{" "}
                        <span
                          className={
                            prediction.real > prediction.fake
                              ? "text-[#04FEC1]"
                              : "text-[#E24C4A]"
                          }
                        >
                          {prediction.confidence > 0.75
                            ? "definitely"
                            : prediction.confidence > 0.5
                            ? "most likely"
                            : "probably"}{" "}
                          {prediction.real > prediction.fake
                            ? "does not contain"
                            : "contains"}{" "}
                          AI-generated or deepfake content
                        </span>
                      </p>
                      <div className="flex justify-between items-center gap-4">
                        <div className="flex-grow w-full max-w-xl mx-auto">
                          <div className="flex justify-between text-sm font-medium mb-1 px-1">
                            <span className="text-[#FF6154]">Fake image</span>
                            <span className="text-[#04FEC1]">Real image</span>
                          </div>
                          <div className="relative h-2 rounded-full bg-gradient-to-r from-[#FF6154] to-[#04FEC1]">
                            <div
                              className="absolute top-0 h-2 rounded-full bg-[#0f172a]" // match background
                              style={{
                                left: `${prediction.real}%`,
                                width: `${100 - prediction.real}%`,
                                borderTopRightRadius: "9999px",
                                borderBottomRightRadius: "9999px",
                              }}
                            />
                            <div
                              className="absolute -top-[1.5px] h-3 w-3 rounded-full bg-gray-200 shadow"
                              style={{
                                left: `calc(${prediction.real}% - 6px)`,
                              }}
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-base">Confidence</p>
                          <p className="text-[32px] text-center">
                            {(prediction.confidence * 100).toFixed(0)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <img src={stats} alt="stats" className="w-10 h-10" />
                )}
              </div>
            </div>
            <div className="bg-[#0E1426] p-6 rounded-lg text-white flex-grow flex flex-col">
              <div className="flex justify-between items-center mb-4 relative">
                <p className="text-base leading-8 border-l-2 border-[#800080] pl-4">
                  Results
                </p>
                <p
                  onMouseEnter={() => setShowInfo(true)}
                  onMouseLeave={() => setShowInfo(false)}
                  onClick={() => {
                    setShowInfo(!showInfo);
                    setTimeout(() => {
                      setShowInfo(false);
                    }, 3000);
                  }}
                  className="cursor-pointer"
                >
                  &#9432;
                </p>
                {showInfo && (
                  <div
                    onClick={() => setShowInfo(false)}
                    className="absolute bg-xpose-darker/80 p-4 text-sm top-10 rounded-lg"
                  >
                    <p className="mb-2">
                      The heat map conveys important information about the spots
                      that may give out that this image is fake or not.
                    </p>
                    <div className="flex gap-2 mb-1">
                      <div className="!h-3 !w-4 mt-1.5 bg-red-700"></div>
                      <div className="!h-3 !w-4 mt-1.5 bg-orange-500"></div>
                      <div className="!h-3 !w-4 mt-1.5 bg-yellow-300"></div>
                      <p>Area has strong influence on the prediction.</p>
                    </div>
                    <div className="flex gap-2 mb-1">
                      <div className="!h-3 !w-4 mt-1.5 bg-blue-700"></div>
                      <div className="!h-3 !w-4 mt-1.5 bg-green-400"></div>
                      <div className="!h-3 !w-4 mt-1.5 bg-black border-[1px] border-white"></div>
                      <p>Area has little or no influence on the prediction.</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center flex-grow bg-[#121A31] items-center py-14">
                {isLoading ? (
                  <div className="w-10 h-10 border-4 border-t-white border-[#04FEC1] rounded-full animate-spin"></div>
                ) : heatmapImage ? (
                  <img
                    src={`data:image/png;base64,${heatmapImage}`}
                    alt="Heatmap"
                    className="max-w-full max-h-full object-contain rounded-md"
                  />
                ) : (
                  <img src={stats} alt="stats" className="w-10 h-10" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
