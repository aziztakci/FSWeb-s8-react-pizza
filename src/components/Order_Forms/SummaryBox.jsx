export default function SummaryBox (props) {

    const {toppingsPrice,finalTotal,isFormInvalid}=props;

    return (

        <div className="summary-box">
          <h3>Sipariş Toplamı</h3>

          <div className="summary-row">
            <span>Seçimler</span>
            <span>{toppingsPrice.toFixed(2)}₺</span>
          </div>

          <div className="summary-row total">
            <span>Toplam</span>
            <span>{finalTotal.toFixed(2)}₺</span>
          </div>

          <button
            type="submit"
            disabled={isFormInvalid}
            className="submit-button"
          >
            SİPARİŞ VER
          </button>
        </div>
    )
}