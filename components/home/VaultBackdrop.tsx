/** Curved fields and engraved lines echo the artwork on a banknote. */
export function VaultBackdrop() {
  return (
    <svg className="vault-landscape" viewBox="0 0 1500 700" preserveAspectRatio="none" aria-hidden="true">
      <path fill="#dfede2" d="M735 700C900 548 764 378 899 227S1214 153 1268 0H1500V700Z" />
      <path fill="#d2e4d7" d="M681 700C758 653 826 625 896 579C1029 492 1095 504 1213 436S1417 363 1500 273V700Z" />
      <g fill="none" stroke="#91b7a3" strokeWidth="1" opacity=".55">
        {Array.from({ length: 11 }, (_, index) => (
          <path key={index} transform={`translate(0 ${index * 9})`}
            d="M718 723C866 631 953 618 1024 558S1130 443 1223 433S1407 497 1524 348" />
        ))}
      </g>
      <path fill="#b8d5c2" d="M1087 700C1212 624 1371 676 1500 534V700Z" />
      <path fill="#ebf1e8" d="M0 596C161 605 206 681 417 700H0Z" />
    </svg>
  );
}
