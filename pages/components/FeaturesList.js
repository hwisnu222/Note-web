import React from "react";

export default function FeaturesList() {
  return (
    <div>
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h4>Catatan tugas pelajar</h4>
          <p>
            Catat semua aktivitas, tugas, dan eventmu dalam aplikasi, agar
            nantinya kamu bisa mengelolanya dengan baik. Dengan manajemen yang
            baik, kamu bisa meninggkatkan produktivitas dalam setiap kegiatan
            keseharian kamu
          </p>
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image src={"/assets/note.svg"} width={400} height={300} />
        </Col>
      </Row>
    </div>
  );
}
