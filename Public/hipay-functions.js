import wixLocation from "wix-location";

/**
 * Энэ функцийг дуудаж хэрэглэгчийг Hi-Pay системийн төлбөрийн хуудсанд аваачна.
 * Хэрэглэгч төлбөр төлсөн, эсвэл цуцалсан тохиолдолд Hi-Pay систем өгөгдсөн 2 хаягны аль нэгрүү төлбөрийн статусыг POST Method-оор илгээнэ.
 * @param {String} checkoutId - Checkout үйлдлээс ирсэн checkoutId
 * @param {String} shopperResultUrl - Төлбөр амжилттай төлөгдсөн тохиолдолд Hi-Pay системээс хариуг хүлээн авах хаяг
 * @param {String} shopperCancelUrl - Төлбөр амжилтгүй тохиолдолд Hi-Pay системээс хариуг хүлээн авах хаяг
 * @param {'en'|'mn'} lang - Төлбөрийн хуудсыг харуулах хэлийг сонгоно. 'en' эсвэл 'mn' гэсэн утгууд авна.
 * @param {String} [customerEmail] - Хэрэглэгчийн имэйл. Хоосон байж болно.
 * @param {String} [customerPhone] - Хэрэглэгчийн утас. Хоосон байж болно.
 */
export function payWithHipay(
	checkoutId,
	shopperResultUrl,
	shopperCancelUrl,
	lang = "mn",
	customerEmail,
	customerPhone
) {
	if (checkoutId == null || checkoutId == "") {
		throw new Error("checkoutId is required");
	}
	if (shopperResultUrl == null || shopperResultUrl == "") {
		throw new Error("shopperResultUrl is required");
	}
	if (shopperCancelUrl == null || shopperCancelUrl == "") {
		throw new Error("shopperCancelUrl is required");
	}

	let url = "https://test.hipay.mn/payment?";

	const queryParams = {
		checkoutId,
		shopperResultUrl: encodeURIComponent(shopperResultUrl),
		shopperCancelUrl: encodeURIComponent(shopperCancelUrl),
		lang,
		customerEmail,
		customerPhone
	};

	Object.keys(queryParams).forEach((key) => {
		url += `${key}=${queryParams[key]}&`;
	});

	wixLocation.to(url);
}
