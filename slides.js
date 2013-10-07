// Global container for slides.
var slides = [];


/*****************************************************************************/
/* Intro to Punking PunkBuster Slide                                         */
/*****************************************************************************/

IntroSlide = function()
{
    this.name = "IntroSlide";
	ThreePrezSlide.call(this);
}

IntroSlide.prototype = new ThreePrezSlide();

IntroSlide.prototype.init = function(App)
{
    ThreePrezSlide.prototype.init.call(this, App);
    this.camera_pos.x = 0;
    this.camera_pos.y = 150;
    this.camera_pos.z = 700;

    this.root = new THREE.Object3D();

    var group = new THREE.Object3D();
    this.threeprez_text = this.create3dText("ThreePrez - your mum.", group);
    this.threeprez_text.position.set(0, 50, 0);
    this.root.add(this.threeprez_text);
    // Tell the framework about our object
    this.setObject3D(this.root);
    this.createFloorLighting();

    this.floor = this.createTexturedFloor(this.floor_texture);
    this.root.add(this.floor);    
    
    this.initFadeAnimations();
}

IntroSlide.prototype.loadResources = function()
{
    this.floor_texture = new THREE.ImageUtils.loadTexture("resources/checkerboard.jpg");
}



slides.push(new IntroSlide());                  // 1
