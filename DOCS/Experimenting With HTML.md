# Experimenting With HTML

<h1 class="ins-tile__headline">LunarOne IT™</h1>

## Strike-out Methods in HTML

<h1 class="ins-tile__headline">Dynamic <strike>Software</strike> Hotware™</h1>
<h1 class="ins-tile__headline">Dynamic <s>Software</s> Hotware™</h1>
<h1 class="ins-tile__headline">Dynamic <del>Software</del> Hotware™</h1>

<div role="heading" aria-level="2" class="ins-tile__tagline">We do IT - So You can do what You do™</div>

<style>
.ins-tile__tagline{
  flex: 1 0 auto;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    text-align: center;
    font-size: calc(var(--tagline-font-size) * .7 + 4.8px);
    width: 100%;
    text-wrap: balance;
    text-wrap-mode: wrap;
    text-wrap-style: balance;

    word-wrap: break-word;
    overflow-wrap: break-word;

   color: hsla(var(--tagline-text-color-h),var(--tagline-text-color-s),var(--tagline-text-color-l),var(--tagline-text-color-a));
  font-family: var(--tagline-font-family),-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial,sans-serif;
  font-style: var(--tagline-font-style);
  font-weight: var(--tagline-font-weight);
  font-size: calc(var(--tagline-font-size) * .5 + 8px)
}

</style>

## HTML `<select>` for American Timezones

Should you find yourself needing an HTML `<select-ion>` of [IANA](https://www.iana.org/time-zones) American timezones. Have a look at [Moment Timezone](https://momentjs.com/timezone/) or use these from Rayan Pentergast [American Timezones](https://rynop.com/2018/12/13/html-select-for-american-timezones/). Pretty simple, just copy/paste and go.

```html
<select>
  <optgroup label="US (Common)">
    <option value="America/Puerto_Rico">Puerto Rico (Atlantic)</option>
    <option value="America/New_York">New York (Eastern)</option>
    <option value="America/Chicago">Chicago (Central)</option>
    <option value="America/Denver">Denver (Mountain)</option>
    <option value="America/Phoenix">Phoenix (MST)</option>
    <option value="America/Los_Angeles">Los Angeles (Pacific)</option>
    <option value="America/Anchorage">Anchorage (Alaska)</option>
    <option value="Pacific/Honolulu">Honolulu (Hawaii)</option>
  </optgroup>

  <optgroup label="America">
    <option value="America/Adak">Adak</option>
    <option value="America/Anchorage">Anchorage</option>
    <option value="America/Anguilla">Anguilla</option>
    <option value="America/Antigua">Antigua</option>
    <option value="America/Araguaina">Araguaina</option>
    <option value="America/Argentina/Buenos_Aires">Argentina – Buenos Aires</option>
    <option value="America/Argentina/Catamarca">Argentina – Catamarca</option>
    <option value="America/Argentina/ComodRivadavia">Argentina – ComodRivadavia</option>
    <option value="America/Argentina/Cordoba">Argentina – Cordoba</option>
    <option value="America/Argentina/Jujuy">Argentina – Jujuy</option>
    <option value="America/Argentina/La_Rioja">Argentina – La Rioja</option>
    <option value="America/Argentina/Mendoza">Argentina – Mendoza</option>
    <option value="America/Argentina/Rio_Gallegos">Argentina – Rio Gallegos</option>
    <option value="America/Argentina/Salta">Argentina – Salta</option>
    <option value="America/Argentina/San_Juan">Argentina – San Juan</option>
    <option value="America/Argentina/San_Luis">Argentina – San Luis</option>
    <option value="America/Argentina/Tucuman">Argentina – Tucuman</option>
    <option value="America/Argentina/Ushuaia">Argentina – Ushuaia</option>
    <option value="America/Aruba">Aruba</option>
    <option value="America/Asuncion">Asuncion</option>
    <option value="America/Atikokan">Atikokan</option>
    <option value="America/Atka">Atka</option>
    <option value="America/Bahia">Bahia</option>
    <option value="America/Barbados">Barbados</option>
    <option value="America/Belem">Belem</option>
    <option value="America/Belize">Belize</option>
    <option value="America/Blanc-Sablon">Blanc-Sablon</option>
    <option value="America/Boa_Vista">Boa Vista</option>
    <option value="America/Bogota">Bogota</option>
    <option value="America/Boise">Boise</option>
    <option value="America/Buenos_Aires">Buenos Aires</option>
    <option value="America/Cambridge_Bay">Cambridge Bay</option>
    <option value="America/Campo_Grande">Campo Grande</option>
    <option value="America/Cancun">Cancun</option>
    <option value="America/Caracas">Caracas</option>
    <option value="America/Catamarca">Catamarca</option>
    <option value="America/Cayenne">Cayenne</option>
    <option value="America/Cayman">Cayman</option>
    <option value="America/Chicago">Chicago</option>
    <option value="America/Chihuahua">Chihuahua</option>
    <option value="America/Coral_Harbour">Coral Harbour</option>
    <option value="America/Cordoba">Cordoba</option>
    <option value="America/Costa_Rica">Costa Rica</option>
    <option value="America/Cuiaba">Cuiaba</option>
    <option value="America/Curacao">Curacao</option>
    <option value="America/Danmarkshavn">Danmarkshavn</option>
    <option value="America/Dawson">Dawson</option>
    <option value="America/Dawson_Creek">Dawson Creek</option>
    <option value="America/Denver">Denver</option>
    <option value="America/Detroit">Detroit</option>
    <option value="America/Dominica">Dominica</option>
    <option value="America/Edmonton">Edmonton</option>
    <option value="America/Eirunepe">Eirunepe</option>
    <option value="America/El_Salvador">El Salvador</option>
    <option value="America/Ensenada">Ensenada</option>
    <option value="America/Fortaleza">Fortaleza</option>
    <option value="America/Fort_Wayne">Fort Wayne</option>
    <option value="America/Glace_Bay">Glace Bay</option>
    <option value="America/Godthab">Godthab</option>
    <option value="America/Goose_Bay">Goose Bay</option>
    <option value="America/Grand_Turk">Grand Turk</option>
    <option value="America/Grenada">Grenada</option>
    <option value="America/Guadeloupe">Guadeloupe</option>
    <option value="America/Guatemala">Guatemala</option>
    <option value="America/Guayaquil">Guayaquil</option>
    <option value="America/Guyana">Guyana</option>
    <option value="America/Halifax">Halifax</option>
    <option value="America/Havana">Havana</option>
    <option value="America/Hermosillo">Hermosillo</option>
    <option value="America/Indiana/Indianapolis">Indiana – Indianapolis</option>
    <option value="America/Indiana/Knox">Indiana – Knox</option>
    <option value="America/Indiana/Marengo">Indiana – Marengo</option>
    <option value="America/Indiana/Petersburg">Indiana – Petersburg</option>
    <option value="America/Indiana/Tell_City">Indiana – Tell City</option>
    <option value="America/Indiana/Vevay">Indiana – Vevay</option>
    <option value="America/Indiana/Vincennes">Indiana – Vincennes</option>
    <option value="America/Indiana/Winamac">Indiana – Winamac</option>
    <option value="America/Indianapolis">Indianapolis</option>
    <option value="America/Inuvik">Inuvik</option>
    <option value="America/Iqaluit">Iqaluit</option>
    <option value="America/Jamaica">Jamaica</option>
    <option value="America/Jujuy">Jujuy</option>
    <option value="America/Juneau">Juneau</option>
    <option value="America/Kentucky/Louisville">Kentucky – Louisville</option>
    <option value="America/Kentucky/Monticello">Kentucky – Monticello</option>
    <option value="America/Knox_IN">Knox IN</option>
    <option value="America/La_Paz">La Paz</option>
    <option value="America/Lima">Lima</option>
    <option value="America/Los_Angeles">Los Angeles</option>
    <option value="America/Louisville">Louisville</option>
    <option value="America/Maceio">Maceio</option>
    <option value="America/Managua">Managua</option>
    <option value="America/Manaus">Manaus</option>
    <option value="America/Marigot">Marigot</option>
    <option value="America/Martinique">Martinique</option>
    <option value="America/Matamoros">Matamoros</option>
    <option value="America/Mazatlan">Mazatlan</option>
    <option value="America/Mendoza">Mendoza</option>
    <option value="America/Menominee">Menominee</option>
    <option value="America/Merida">Merida</option>
    <option value="America/Mexico_City">Mexico City</option>
    <option value="America/Miquelon">Miquelon</option>
    <option value="America/Moncton">Moncton</option>
    <option value="America/Monterrey">Monterrey</option>
    <option value="America/Montevideo">Montevideo</option>
    <option value="America/Montreal">Montreal</option>
    <option value="America/Montserrat">Montserrat</option>
    <option value="America/Nassau">Nassau</option>
    <option value="America/New_York">New York</option>
    <option value="America/Nipigon">Nipigon</option>
    <option value="America/Nome">Nome</option>
    <option value="America/Noronha">Noronha</option>
    <option value="America/North_Dakota/Center">North Dakota – Center</option>
    <option value="America/North_Dakota/New_Salem">North Dakota – New Salem</option>
    <option value="America/Ojinaga">Ojinaga</option>
    <option value="America/Panama">Panama</option>
    <option value="America/Pangnirtung">Pangnirtung</option>
    <option value="America/Paramaribo">Paramaribo</option>
    <option value="America/Phoenix">Phoenix</option>
    <option value="America/Port-au-Prince">Port-au-Prince</option>
    <option value="America/Porto_Acre">Porto Acre</option>
    <option value="America/Port_of_Spain">Port of Spain</option>
    <option value="America/Porto_Velho">Porto Velho</option>
    <option value="America/Puerto_Rico">Puerto Rico</option>
    <option value="America/Rainy_River">Rainy River</option>
    <option value="America/Rankin_Inlet">Rankin Inlet</option>
    <option value="America/Recife">Recife</option>
    <option value="America/Regina">Regina</option>
    <option value="America/Resolute">Resolute</option>
    <option value="America/Rio_Branco">Rio Branco</option>
    <option value="America/Rosario">Rosario</option>
    <option value="America/Santa_Isabel">Santa Isabel</option>
    <option value="America/Santarem">Santarem</option>
    <option value="America/Santiago">Santiago</option>
    <option value="America/Santo_Domingo">Santo Domingo</option>
    <option value="America/Sao_Paulo">Sao Paulo</option>
    <option value="America/Scoresbysund">Scoresbysund</option>
    <option value="America/Shiprock">Shiprock</option>
    <option value="America/St_Barthelemy">St Barthelemy</option>
    <option value="America/St_Johns">St Johns</option>
    <option value="America/St_Kitts">St Kitts</option>
    <option value="America/St_Lucia">St Lucia</option>
    <option value="America/St_Thomas">St Thomas</option>
    <option value="America/St_Vincent">St Vincent</option>
    <option value="America/Swift_Current">Swift Current</option>
    <option value="America/Tegucigalpa">Tegucigalpa</option>
    <option value="America/Thule">Thule</option>
    <option value="America/Thunder_Bay">Thunder Bay</option>
    <option value="America/Tijuana">Tijuana</option>
    <option value="America/Toronto">Toronto</option>
    <option value="America/Tortola">Tortola</option>
    <option value="America/Vancouver">Vancouver</option>
    <option value="America/Virgin">Virgin</option>
    <option value="America/Whitehorse">Whitehorse</option>
    <option value="America/Winnipeg">Winnipeg</option>
    <option value="America/Yakutat">Yakutat</option>
    <option value="America/Yellowknife">Yellowknife</option>
  </optgroup>
</select>
```
