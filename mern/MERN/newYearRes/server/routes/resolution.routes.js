const ResoultionController = require("../controllers/resolution.controller")

module.exports = app => {
    app.put("/api/resolutions/:id", ResoultionController.updateResolution)
    app.delete("/api/resolutions/:id", ResoultionController.deleteResolution)
    app.get("/api/resolutions/:id", ResoultionController.fetchResolutionById)
    app.get("/api/resolutions", ResoultionController.fetchAllResolutions)
    app.post("/api/resolutions", ResoultionController.createResolution)
}