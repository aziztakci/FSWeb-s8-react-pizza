import styled from "styled-components";

const DivRadio = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    transform: translateX(-13px);
    flex-direction: column;
    gap: 2px;
    min-width: 100%;
    max-width: 100%;
    padding: 0 30px;
  }
`;

const LabelRound = styled.label`
  border: 1px hidden;
  color: #5f5f5f;
  font-family: "Barlow", sans-serif;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #faf7f2;
  display: flex;
  align-items: center;
  justify-content: center;

  &:has(input:checked) {
    background-color: #ffeecc;
  }
`;
const Title = styled.h2`
  font-size: 20px;
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  margin-bottom: 19px;
`;

const Pmedia = styled.p`
  @media (max-width: 768px) {
    transform: translateX(-30px);
  }
`;

const SectionMedia = styled.section`
  @media (max-width: 768px) {
    transform: translateX(50px);
  }
`;

export default function RadioButtons({ handleChange, selectedSize }) {
  return (
    <>
      <SectionMedia className="order-radio-btn">
        <Title>
          Boyut Seç <span style={{ color: "red" }}> *</span>
        </Title>
        <DivRadio>
          <LabelRound>
            <input
              hidden
              data-cy="size-s"
              type="radio"
              name="size"
              value="Küçük"
              onChange={handleChange}
              checked={selectedSize === "Küçük"}
            />{" "}
            S
          </LabelRound>
          <br />
          <LabelRound>
            <input
              hidden
              data-cy="size-m"
              type="radio"
              name="size"
              value="Standart"
              onChange={handleChange}
              checked={selectedSize === "Standart"}
            />{" "}
            M
          </LabelRound>
          <br />
          <LabelRound>
            <input
              hidden
              data-cy="size-l"
              type="radio"
              name="size"
              value="Büyük"
              onChange={handleChange}
              checked={selectedSize === "Büyük"}
            />{" "}
            L
          </LabelRound>
        </DivRadio>
        <br />
        {!selectedSize && (
          <Pmedia
            data-cy="size-error-message"
            style={{
              color: "red",
              fontSize: "14px",
              fontFamily: "roboto",
              fontWeight: "500",
            }}
          >
            Lütfen bir boyut seçiniz.
          </Pmedia>
        )}
      </SectionMedia>
    </>
  );
}
