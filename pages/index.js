import Image from "next/image";
import Link from "next/link";

import { Container, Button, Row, Col } from "react-bootstrap";

import Layout from "./components/Layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Note App - Home">
      <div className={`${styles.container} container`}>
        <div className={`${styles.header} p-4`}>
          <Link href="/">
            <h4>Note</h4>
          </Link>
          <nav className={styles.nav}>
            <Link href="/">
              <a className="mr-md-5 py-3 py-md-0 font-weight-bold">Home</a>
            </Link>
            <Link href="/">
              <a className="mr-md-5 py-3 py-md-0 font-weight-bold">Introduce</a>
            </Link>
            <Link href="/">
              <a className="mr-md-5 py-3 py-md-0 font-weight-bold">Features</a>
            </Link>
            <Link href="/">
              <Button variant="dark">Download</Button>
            </Link>
          </nav>
        </div>

        <main>
          <Row>
            <Col md={6} className="d-flex justify-content-center">
              <Image
                src="/assets/notepage.svg"
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </Col>
            <Col
              md={6}
              className="d-flex flex-column justify-content-center align-items-center align-items-md-start"
            >
              <h1 className={`${styles.textMobile} font-weight-bolder`}>
                Catat Sekarang
              </h1>
              <p className={styles.textMobile}>
                Pentingnya mencatat semua aktivitas yang perlu kamu lakukan
                untuk meningkatkan produktifitas dan kehidupan sehari hari.
              </p>
              <p className={styles.textMobile}>
                Tunggu apa lagi, download sekarang
              </p>
              <Button variant="dark font-weight-bold mt-4">Download</Button>
            </Col>
          </Row>

          <div className={`${styles.card} p-4`}>
            <div className={`${styles.borderDashed} p-4`}>
              <Row>
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <h4 className="text-center font-weight-bold">
                    Apa itu Note app?
                  </h4>
                </Col>
                <Col md={6}>
                  <p>
                    sebuah catatan pribadi yang digunakkan untuk mencatan semua
                    aktivitas, tugas, event, list pembelian barang, agar kamu
                    dapat melihat aktivitas apa saja yang sudah kamu lakukan.
                    sehingga tidak ada aktivitas yang terlupakan.
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className={styles.features}>
            <h3 className="text-center">Fitur</h3>
            <p className={`${styles.featuresText} text-center`}>
              Note app memiliki beberapa fitur yang sangat menarik, dan keren
              yang digunakkan untuk meningkatkan produktifitas pelajar,
              mahasiswa, pekerja dan ibu rumah tangga
            </p>
          </div>

          <div className={styles.featuresItem}>
            <Row>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <h4 className={styles.textMobile}>Catatan tugas pelajar</h4>
                <p className={styles.textMobile}>
                  Catat semua aktivitas, tugas, dan eventmu dalam aplikasi, agar
                  nantinya kamu bisa mengelolanya dengan baik. Dengan manajemen
                  yang baik, kamu bisa meninggkatkan produktivitas dalam setiap
                  kegiatan keseharian kamu
                </p>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <Image src={"/assets/note.svg"} width={400} height={300} />
              </Col>
            </Row>

            <hr className={styles.line} />

            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <Image src={"/assets/shop.svg"} width={400} height={300} />
              </Col>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <h4 className={styles.textMobile}>List belanja barang</h4>
                <p className={styles.textMobile}>
                  Terkadang ketika belanja di supermarket, pasar atau mall, ada
                  aja barang yang seharusnya dibeli tertinggal ataupun belum
                  terbeli. Dengan memanfaatkan catatan hal tersebut dapat
                  diminimalisir dengan baik dan dapat mementau barang apa yang
                  sudah kita beli.
                </p>
              </Col>
            </Row>

            <hr className={styles.line} />

            <Row>
              <Col md={6} className="d-flex flex-column justify-content-center">
                <h4 className={styles.textMobile}>Kunci aplikasi</h4>
                <p className={styles.textMobile}>
                  Ingin catatanmu hanya bisa kamu lihat sendiri? didalam
                  aplikasi tersedia fitur untuk lock app, dengan demikian
                  aplikasi kamu bebas dari pihak luar, sehingga kamu bisa
                  leluasa mengontrol catatan kamu dengan baik
                </p>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <Image src={"/assets/lock.svg"} width={400} height={300} />
              </Col>
            </Row>

            <hr className={styles.line} />
            <div className={styles.lastContent}>
              <div className={styles.borderLast}></div>
              <Row>
                <Col
                  md={6}
                  className="d-flex flex-column justify-content-center px-5"
                >
                  <h4>Tunggu apalagi</h4>
                  <p>
                    Coba sekarang juga, dan ambil manfaat yang ada buat
                    produktifitas dalam kehidupan kamu. dan jangan lupa beritahu
                    ke keluarga
                  </p>
                </Col>
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Image src={"/assets/lunch.svg"} width={400} height={300} />
                </Col>
              </Row>
            </div>
          </div>
        </main>
      </div>
      <footer
        className={`${styles.footer} d-flex justify-content-between flex-column flex-md-row p-4`}
      >
        <div className="d-flex  flex-column flex-md-row">
          <Link href="/">
            <a className="mr-4 py-3 py-md-0 font-weight-bold">Note</a>
          </Link>
          <Link href="/">
            <a className="py-3 py-md-0 font-weight-bold">Privacy</a>
          </Link>
        </div>
        <div className="d-flex flex-column flex-md-row">
          <p className="mr-3">Made by Wisnu Harjanta with love</p>
          <div>
            <span className="mr-3">
              <Image
                src="https://raw.githubusercontent.com/hwisnu222/Note-web/8caee8d5b4cc7f438eb82dc988a3598f188b5652/public/assets/github.svg"
                width={25}
                height={25}
              />
            </span>
            <span>
              <Image src="/assets/linkedin.svg" width={25} height={25} />
            </span>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
