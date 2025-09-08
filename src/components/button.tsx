import clsx from "clsx";

function Button({ primary, disabled }) {
  return (

    // dengan CLSX
    <button
      className={clsx(
        "base-btn",
        primary && "btn-primary",    // hanya dipakai kalau primary = true
        disabled && "btn-disabled"  // hanya dipakai kalau disabled = true
      )}
    >

    // tanpa CLSX
    <button
    className={`base-btn ${primary ? "btn-primary" : ""} ${
        disabled ? "btn-disabled" : ""
    }`}
    />

      Click Me
    </button>
  );
}