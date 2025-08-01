const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};

export function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined ? (
            <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img
                src="/Snip20250707_36.png"
                style={{ width: 12, height: 12 }}
                alt="icon"
              />
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ fontSize: 12 }}>{description}</div>
    </div>
  );
}
