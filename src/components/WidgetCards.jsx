
const WidgetCards = () => {
  const shopWidgets = [
    { id: 1, src: 'img-3.jpg' },
    { id: 2, src: 'img-4.jpg' },
    { id: 3, src: 'img-5.jpg' },
    { id: 4, src: 'img-6.jpg' },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {shopWidgets.map((shopWidget) => {
            return (
              <div className="col-6 col-lg-3 my-3" key={shopWidget.id}>
                <a href="#">
                  <img
                    width={'100%'}
                    className="img-fluid my-2 rounded"
                    src={require(`../assets/banner_img/${shopWidget.src}`)}
                    alt={shopWidget.id}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WidgetCards;
