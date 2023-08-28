import styles from "./MapEmbed.module.css";

export default function MapEmbed() {
  return (
    <div className={styles.mapEmbed}>
      <iframe
        className={styles.map}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20%20%20%20%20%20%20%20%20%2016825%2048th%20Ave%20W%20Ste%20108%20Lynnwood,%20WA%2098037+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
}
