/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./index.css";

// @ts-nocheck TODO(jpoehnelt) remove when fixed

// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map1") as HTMLElement,
    {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
    }
  );

  const input = document.getElementById("pac-input-1") as HTMLInputElement;

  const autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.bindTo("bounds", map);

  // Specify just the place data fields that you need.
  autocomplete.setFields(["place_id", "geometry", "name", "formatted_address"]);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById(
    "infowindow-content-1"
  ) as HTMLElement;

  infowindow.setContent(infowindowContent);

  const geocoder = new google.maps.Geocoder();

  const marker = new google.maps.Marker({ map: map });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  autocomplete.addListener("place_changed", () => {
    infowindow.close();

    const place = autocomplete.getPlace();

    if (!place.place_id) {
      return;
    }

    geocoder
      .geocode({ placeId: place.place_id })
      .then(({ results }) => {
        map.setZoom(11);
        map.setCenter(results[0].geometry.location);

        // Set the position of the marker using the place ID and location.
        // @ts-ignore TODO(jpoehnelt) This should be in @typings/googlemaps.
        marker.setPlace({
          placeId: place.place_id,
          location: results[0].geometry.location,
        });

        marker.setVisible(true);

        infowindowContent.children["place-name-1"].textContent = place.name;
        infowindowContent.children["place-id-1"].textContent = place.place_id;
        infowindowContent.children["place-address-1"].textContent =
          results[0].formatted_address;

        infowindow.open(map, marker);
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  });

  const map2 = new google.maps.Map(
    document.getElementById("map2") as HTMLElement,
    {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
    }
  );

  const input2 = document.getElementById("pac-input-2") as HTMLInputElement;

  const autocomplete2 = new google.maps.places.Autocomplete(input2);

  autocomplete2.bindTo("bounds", map2);

  // Specify just the place data fields that you need.
  autocomplete2.setFields([
    "place_id",
    "geometry",
    "name",
    "formatted_address",
  ]);

  map2.controls[google.maps.ControlPosition.TOP_LEFT].push(input2);

  const infowindow2 = new google.maps.InfoWindow();
  const infowindowContent2 = document.getElementById(
    "infowindow-content-2"
  ) as HTMLElement;

  infowindow2.setContent(infowindowContent2);

  const geocoder2 = new google.maps.Geocoder();

  const marker2 = new google.maps.Marker({ map: map2 });

  marker2.addListener("click", () => {
    infowindow2.open(map2, marker2);
  });

  autocomplete2.addListener("place_changed", () => {
    infowindow2.close();

    const place = autocomplete2.getPlace();

    if (!place.place_id) {
      return;
    }

    geocoder2
      .geocode({ placeId: place.place_id })
      .then(({ results }) => {
        map2.setZoom(11);
        map2.setCenter(results[0].geometry.location);

        // Set the position of the marker using the place ID and location.
        // @ts-ignore TODO(jpoehnelt) This should be in @typings/googlemaps.
        marker2.setPlace({
          placeId: place.place_id,
          location: results[0].geometry.location,
        });

        marker2.setVisible(true);

        infowindowContent2.children["place-name-2"].textContent = place.name;
        infowindowContent2.children["place-id-2"].textContent = place.place_id;
        infowindowContent2.children["place-address-2"].textContent =
          results[0].formatted_address;

        infowindow2.open(map2, marker2);
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  });
}
export { initMap };
