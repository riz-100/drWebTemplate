import "../CSS/GoogleMap.css"
const GoogleMap = () => {
    return (
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30274.75660655799!2d73.8787328!3d18.468044799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea76f4fd68e3%3A0xcac9c2a9349894f8!2sRuby%20Hall%20Clinic%2C%20Wanowrie!5e0!3m2!1sen!2sin!4v1743729846214!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
