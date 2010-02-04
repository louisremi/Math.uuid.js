/*
 * Math.uuid.js, minimalistic uuid generator.
 * Original script from Robert Kieffer, http://www.broofa.com 
 * 
 * Dual licensed under the MIT and GPL licenses.
 * 
 * example: 
 * >>> Math.uuid(); // returns RFC4122, version 4 ID 
 * "92329D39-6F5C-4520-ABFC-AAB64544E172"
 */
if (typeof Math.uuid !== 'function') {
	Math.uuid = function() {
		var chars = Math.uuid.CHARS, uuid = [],
			r, i = 36;
	
		// rfc4122 requires these characters
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';
	
		// Fill in random data.  At i==19 set the high bits of clock sequence as
		// per rfc4122, sec. 4.1.5
		while (i--) {
			if (!uuid[i]) {
				r = Math.random()*16|0;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
		return uuid.join('');
	}
	Math.uuid.CHARS = '0123456789ABCDEFG'.split('');
}