import React from "react";

const Practice2 = () => {
  const isLogin = true;
  const name = "Ali";
  const surname = "Can";

  return (
    <div>
      {isLogin ? (
        <>
          <h3>
            Hoş Geldiniz {name} {surname}
          </h3>
          <ul>
            <li>Profil</li>
            <li>Rezervasyonlar</li>
            <li>Çıkış</li>
          </ul>
        </>
      ) : (
        <div>Lütfen Giriş Yapınız</div>
      )}
    </div>
  );
};

export default Practice2;
